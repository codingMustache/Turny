import { auth } from "../..//auth";
import SignIn from "@/components/signin";
import SignOut from "@/components/signout";

export default async function Page() {
	// const session = await auth();

	// if (!session?.user?.image) {
	//   return null;
	// }

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="m-auto border-2 text-white">
				<form>
					<SignIn />
				</form>
			</div>
		</main>
	);
}
