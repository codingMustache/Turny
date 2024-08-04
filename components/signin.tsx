import { signIn } from "@/auth";

export default () => {
  const github = async () => {
    "use server";
    await signIn("github", { redirectTo: "/dashboard" });
  };

  return (
    <>
      <button
        formAction={github}
        className="text-white border-white border-2 px-6 py-2 rounded"
      >
        Github
      </button>
    </>
  );
};
