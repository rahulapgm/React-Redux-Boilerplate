
import { all } from "redux-saga/effects";
import isFunction from "lodash/fp/isFunction";

export const runSagas = (sagas) => {
	if (Array.isArray(sagas)) {
		return sagas.map((saga) => saga());
	}

	if (isFunction(sagas)) {
		return Array.of(sagas());
	}

	throw new TypeError(`${sagas} should be an Array or Function`);
};

export const allSagas = () => [];

export default function* rootSaga() {
	yield all(allSagas());
}
