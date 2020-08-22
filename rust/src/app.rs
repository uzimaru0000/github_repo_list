use super::api;
use super::components::card;
use super::models;
use anyhow::Error;
use yew::format::Json;
use yew::prelude::*;
use yew::services::console::ConsoleService;
use yew::services::fetch::{FetchService, FetchTask};

pub struct Model {
    link: ComponentLink<Self>,
    user_id: String,
    repos: Vec<models::Repository>,
    err: Option<Error>,
    loading: bool,
    task: Option<FetchTask>,
}

pub enum Msg {
    Input(String),
    Fetch,
    FetchResult(Result<Vec<models::Repository>, Error>),
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();
    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            user_id: String::from(""),
            repos: vec![],
            err: None,
            loading: false,
            task: None,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Input(id) => {
                self.user_id = id;
            }
            Msg::Fetch => {
                self.loading = true;
                self.repos.clear();
                self.err = None;
                self.task = None;

                let handler =
                    self.link
                        .callback(|res: api::FetchResponse<Vec<models::Repository>>| {
                            let (_, Json(data)) = res.into_parts();
                            Msg::FetchResult(data)
                        });

                let req = api::get_repositories(self.user_id.clone());
                match FetchService::fetch(req, handler) {
                    Ok(task) => self.task = Some(task),
                    Err(_) => {
                        ConsoleService::log("error");
                        self.task = None;
                    }
                };
            }
            Msg::FetchResult(res) => match res {
                Ok(repos) => {
                    self.repos = repos;
                    self.loading = false;
                }
                Err(err) => {
                    self.err = Some(err);
                    self.loading = false;
                }
            },
        }
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        let loading = if self.loading {
            html! {
                <div class="loading"></div>
            }
        } else {
            html! {}
        };
        let error = if let Some(e) = &self.err {
            html! {
                <div>{ format!("{:?}", e) }</div>
            }
        } else {
            html! {}
        };
        let repos = self.repos.iter().map(card::view).collect::<Html>();

        html! {
            <div class="app">
                <form class="form">
                    <label class="caption">{ "GitHub UserID" }</label>
                    <input
                        class="input"
                        type="text"
                        value=&self.user_id
                        oninput=self.link.callback(|e: InputData| Msg::Input(e.value)) />
                    <button
                        class="btn"
                        type="button"
                        onclick=self.link.callback(|_| Msg::Fetch)>
                        { "Search" }
                    </button>
                </form>
                <div class="repos">
                    { loading }
                    { error }
                    { repos }
                </div>
            </div>
        }
    }
}
