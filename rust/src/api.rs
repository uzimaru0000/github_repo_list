use anyhow::Error;
use yew::format::{Json, Nothing};
use yew::services::fetch::{Request, Response};

const API_BASE_URL: &'static str = "https://api.github.com";

pub type FetchResponse<T> = Response<Json<Result<T, Error>>>;

pub fn get_repositories(user_id: String) -> Request<Nothing> {
    Request::get(format!(
        "{}/users/{}/repos?sort=created",
        API_BASE_URL, user_id
    ))
    .body(Nothing)
    .expect("Error get repositories from GitHub")
}
