import { signOut } from "@/auth";

export default function SignOut() {
	const out = async () => {
		"use server";
		await signOut();
	};

	return (
		<form>
			<button
				formAction={out}
				className="text-white border-white border-2 px-12 py-2 rounded"
			>
				Sign Out
			</button>
		</form>
	);
}
