class BaseController:
    host: str
    api_key: str

    def __init__(self, host: str, api_key: str) -> None:
        self.host = host
        self.api_key = api_key
