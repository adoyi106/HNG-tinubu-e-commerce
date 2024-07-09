function SignUp() {
  return (
    <div className="flex flex-col items-center lg:col-start-2">
      <div className="text-3xl font-medium text-white mb-8">
        Stay up to date
      </div>
      <form className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter email address"
          className="px-4 py-2 bg-inherit text-[#EAE8E8] focus:outline-none border border-[#E2E2E280]"
        />
        <button className="px-4 py-2 rounded bg-white text-3xl font-medium text-[#CC5500] hover:bg-[#f1f1f1]">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SignUp;
