const Contacts = () => {
  return (
    <div
      id='Contacts'
      className={`flex flex-col justify-center items-center w-full h-screen md:h-full bg-bg_qr_image bg-fixed gap-24 py-64 px-6 text-xl text-white sm:px-12 lg:px-24 `}
    >
      <p>
        Hi there! Thank you for visiting my personal website and any feedback
        will be appreciated.
      </p>
      <p>
        Are you looking for a frontend developer? Message me in this email:
        <span className='text-neon'> rianengracia@gmail.com</span>. Thanks!
      </p>
    </div>
  );
};

export default Contacts;
