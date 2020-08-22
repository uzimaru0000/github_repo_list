use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct Repository {
    pub full_name: String,
    pub html_url: String,
    pub language: Option<String>,
    pub stargazers_count: i64,
}
