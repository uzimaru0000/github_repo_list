use super::super::models::Repository;
use yew::prelude::*;

pub fn view(repo: &Repository) -> Html {
    html! {
        <a class="repo" href={ repo.html_url.clone() }>
            <p class="name">{ repo.full_name.clone() }</p>
            <p class="info">
                {
                    repo
                        .language
                        .clone()
                        .map(|lang| html! { <span data-lang=lang>{ lang }</span> })
                        .unwrap_or(html!{ <span data-lang="none">{ "None" }</span> })
                }
                <span class="count">{ format!("{}", repo.stargazers_count) }</span>
            </p>
        </a>
    }
}
