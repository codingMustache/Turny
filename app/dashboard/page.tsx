import { auth } from "@/auth";
import Image from "next/image";}
import Signout from "@/components/signout";

export default async function Page() {
	const session = await auth();

	if (!session?.user?.image) {
		return null;
	}

	return (
		<main>
			<Image
				className="rounded-full h-12 w-12 "
				src={session.user.image}
				alt="User Avatar"
			/>
			<p>{session.user.name}</p>
			<p>{session.user.email}</p>
			<Signout />
		</main>
	);
}
