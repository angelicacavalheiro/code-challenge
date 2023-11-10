import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Desculpe, um erro inesperado ocorreu.</p>
		</div>
	);
}
