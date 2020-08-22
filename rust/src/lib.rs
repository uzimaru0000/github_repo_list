#![recursion_limit = "256"]

mod api;
mod app;
mod components;
mod models;

use app::Model;
use wasm_bindgen::prelude::*;
use yew::prelude::*;

#[wasm_bindgen(start)]
pub fn run_app() {
    App::<Model>::new().mount_to_body();
}
