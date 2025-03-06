const Footer = () => {
  return (
    <div className="absolute w-full ">
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Uzma / David. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default Footer;
