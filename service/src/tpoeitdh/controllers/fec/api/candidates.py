from typing import Any

from tpoeitdh.controllers.fec.api.base import BaseApi, BaseParams
from tpoeitdh.util import clean_nulls_from_dict


class CandidatesParams(BaseParams):
    q: list[str] | None
    candidate_id: list[str] | None
    election_full: bool | None
    min_first_file_date: str | None
    max_first_file_date: str | None
    is_active_candidate: bool | None
    cycle: list[int] | None
    election_year: list[int] | None
    office: list[str] | None
    state: list[str] | None
    party: list[str] | None
    year: str | None
    district: list[str] | None
    candidate_status: list[str] | None
    incumbent_challenge: list[str] | None
    federal_funds_flag: bool | None
    has_raised_funds: bool | None
    name: list[str] | None


class CandidatesApi(BaseApi):
    def get_candidate_by_id(
        self, candidate_id: str, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/candidate/{candidate_id}/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_history_by_id(
        self, candidate_id: str, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/candidate/{candidate_id}/history/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_history_by_id_cycle(
        self, candidate_id: str, cycle: int, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/candidate/{candidate_id}/history/{cycle}/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_totals_by_id(
        self, candidate_id: str, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/candidate/{candidate_id}/totals/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidates(self, params: CandidatesParams | None = None) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            '/candidates/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def search_candidates(
        self, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            '/candidates/search/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_totals(
        self, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            '/candidates/totals/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_total_aggregates(
        self, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            '/candidates/totals/aggregates/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidates_by_committee_id(
        self, committee_id: str, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/committee/{committee_id}/candidates/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_history_by_committee_id(
        self, committee_id: str, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/committee/{committee_id}/candidates/history/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json

    def get_candidate_history_by_committee_id_cycle(
        self, committee_id: str, cycle: int, params: CandidatesParams | None = None
    ) -> dict[str, Any]:
        _params = params or {}

        response = self.get(
            f'/committee/{committee_id}/candidates/history/{cycle}/',
            params=clean_nulls_from_dict(_params),
        )
        response.raise_for_status()

        response_json = response.json()
        return response_json
