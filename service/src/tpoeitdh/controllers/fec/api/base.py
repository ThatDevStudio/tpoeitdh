from collections.abc import Mapping
from typing import Any, TypedDict

import requests


class BaseParams(TypedDict):
    page: int | None
    per_page: int | None
    sort: str | None
    sort_hide_null: bool | None
    sort_nulls_last: bool | None


class BaseApi:
    host: str
    version: str
    api_key: str

    def __init__(self, host: str, version: str, api_key: str) -> None:
        self.host = host
        self.version = version
        self.api_key = api_key

    def endpoint(self, path: str) -> str:
        return f'{self.host}/{self.version}/{path}'

    def headers(self) -> dict[str, Any]:
        return {
            'X-Api-Key': self.api_key,
        }

    def request(
        self, method: str, path: str, params: Mapping[str, Any]
    ) -> requests.Response:
        _headers = self.headers()

        return requests.request(
            method,
            self.endpoint(path),
            headers=_headers,
            params=params,
        )

    def get(self, path: str, params: Mapping[str, Any]) -> requests.Response:
        return self.request(method='GET', path=path, params=params)
