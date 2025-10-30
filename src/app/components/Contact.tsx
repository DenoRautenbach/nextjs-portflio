import { Button } from "flowbite-react"
import { HiArrowNarrowRight } from "react-icons/hi";

const ContactLayout = () => {
    return (
        <div className="container my-24 mx-auto lg:p-24 p-6">
          <section className="mb-32 text-center">
            <div className="py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div
                      className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-24 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14 lg:top-16">
                      <h2 className="mb-12 text-3xl font-bold text-white">Let&apos;s have a chat</h2>
                      <form>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded rounded-b-2 border-2 border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput90"
                            placeholder="Name" />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Name
                          </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                          <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded rounded-b-2 border-2 border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput91"
                            placeholder="Email address" />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email address
                          </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                          <textarea
                            className="peer block min-h-[auto] w-full rounded rounded-b-2 border-2 border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            placeholder="Your message"></textarea>
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Message</label>
                        </div>
                        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <Button className="border-2 border-white bg-black mx-auto px-2 text-white" color="white">
                          Send
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                        </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <div
                      className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                        <iframe className="absolute left-0 top-12 h-full w-full rounded-lg border-0" 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847614.6226093159!2d18.6560594!3d-33.915538049999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1761077766063!5m2!1sen!2sza" width="600" height="450" 
                          loading="lazy" 
                        ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default ContactLayout