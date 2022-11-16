const Contacts = () => {
  return (
    <div
      id='Contacts'
      className={`flex flex-col justify-center items-center w-full min-h-screen md:h-full bg-bg_qr_image bg-fixed gap-11 py-24 px-6 text-white sm:px-12 lg:px-24 `}
    >
      <p>
        You&apos;ve reached the end of this website and any feedback will be
        appreciated.
      </p>
      <p>
        Hi! Are you looking for a frontend developer? Message me in this email:
        <span className='text-neon'> rianengracia@gmail.com</span>. Thanks!
      </p>
    </div>
  );
};

export default Contacts;
