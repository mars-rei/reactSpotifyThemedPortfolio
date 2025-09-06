const Profile = () => {
  return (
    <div class="flex justify-start items-center md:items-end pt-16 mx-5"> 
      <div class="w-56 flex justify-center items-center">
        <img src="/images/headshot.jpeg" class="w-56 rounded-full" />
      </div>
      <div class="ml-8">
        <div>
          <p class="md:text-5xl lg:text-6xl font-bold">Imogen Dicen</p>
        </div>
        <div class="mt-4 flex flex-row items-center space-x-2">
          <p class="text-sm">
            <span class="font-semibold">3rd Year</span>
            <span class="text-faded"> Computer Science Student • </span>
            <span class="font-semibold">6</span>
            <span class="text-faded"> Ongoing Projects</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;