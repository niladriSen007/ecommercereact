

const Contact = () => {

  return <div className="text-center py-6 flex flex-col overflow-x-hidden">
    <h2 className="font-bold text-[#233e28] text-2xl md:text-5xl pb-6">Feel free to contact us</h2>
    <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.851199305698!2d88.44321601491318!3d22.6965825851191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f2f4d8192db%3A0x8b53463b0e497142!2sSreepur%2C%20Madhyamgram%2C%20West%20Bengal%20700130!5e0!3m2!1sen!2sin!4v1672233648723!5m2!1sen!2sin"
          // width="1330"
          // height="450"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pl-3 md:pl-6 mb-12 w-[380px] md:w-[1500px] h-[300px] md:h-[420px] "
        ></iframe>
        <div >
          <form action="https://formspree.io/f/xqkoeynj" method="POST" className="flex flex-col gap-4 px-[20px] w-full  md:px-[520px]  ">
            <input type="text" name="UserName" placeholder="Enter your name" required className="border-slate-400 border-2 p-2 placeholder:text-slate-600 font-bold"/>
            <input type="text" name="Email"  placeholder="Enter your email" required  className="border-slate-400 border-2 p-2 placeholder:text-slate-600 font-bold"/>
            <textarea name="" cols="20" rows="4" required placeholder="Enter your message" className="border-slate-400 border-2 p-2 placeholder:text-slate-600 font-bold"/>
            <input type="submit"  value="Send" className="bg-[#233e28] text-white w-40 text-center p-2 rounded-sm font-bold" />
          </form>
        </div>
  </div>;
};

export default Contact;
