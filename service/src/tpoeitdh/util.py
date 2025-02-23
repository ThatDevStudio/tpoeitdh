from collections.abc import Mapping
from typing import Any


def clean_nulls_from_dict(d: Mapping[Any, Any]) -> Mapping[Any, Any]:
    return {k: v for k, v in d.items() if v is not None}
