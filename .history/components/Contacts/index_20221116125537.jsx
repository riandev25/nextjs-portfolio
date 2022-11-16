const Contacts = () => {
  return (
    <div
      id='Contacts'
      className={`flex flex-col justify-center items-center w-full h-screen md:h-full bg-bg_qr_image bg-fixed gap-24 py-64 px-6 text-xl text-center text-white sm:px-12 lg:px-22 `}
    >
      <p>
        Hi there! Thank you for visiting my personal website. It&apos;s still a
        work in progress and any feedback will be appreciated. You can look at
        my <a className=''>Github</a> for other repositories
      </p>
      <p>
        Are you looking for a frontend developer? I&apos;m actively looking for
        a job. Message me in this email:
        <span className='text-neon'> rianengracia@gmail.com</span>. Thanks!
      </p>
    </div>
  );
};

export default Contacts;
