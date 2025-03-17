import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

interface props {
  hover: boolean;
}

function SocialShare({ hover }: props) {
  return (
    <div className=" justify-center lg:justify-start flex gap-2 xl:gap-3 ">
      <Link
        href="https://www.linkedin.com/in/robyy-i-758713291"
        target="_blank"
        className={`${
          hover && "hover:bg-white hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        <FaLinkedinIn size={20} />
      </Link>
      <Link
        href="#"
        target="_blank"
        className={`${
          hover && "hover:bg-white hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        <FaTwitter size={20} />
      </Link>
      <Link
        href="https://www.facebook.com/share/15onWZRzDV/?mibextid=qi2Omg"
        target="_blank"
        className={`${
          hover && "hover:bg-white hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        <FaFacebookF size={20} />
      </Link>

      <Link
        href="https://youtube.com/@robyy1837?si=K5nc6nRHfh3EM9uB"
        target="_blank"
        className={`${
          hover && "hover:bg-white hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        <FaYoutube size={20} />
      </Link>
      <Link
        href="https://wa.me/01960710948?text=Query us"
        target="_blank"
        className={`${
          hover && "hover:bg-white  hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        <FaWhatsapp size={20} />
      </Link>
      <Link
        href=" https://www.instagram.com/robyycosmetics?igsh=MTI3cnNxam0xd2hiNA=="
        target="_blank"
        className={`${
          hover && "hover:bg-white  hover:text-primaryColorHover"
        }   xl:p-4 p-2 sm:p-3 text-white  transition-all hover:scale-110   bg-primaryColorHover rounded-xl`}
      >
        {hover ? (
          <FaInstagram size={20} />
        ) : (
          <svg
            width="20"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1204 6.15557C14.3376 8.14141 14.3071 11.3252 12.1337 13.2806C12.1297 13.2846 12.1248 13.2889 12.1204 13.2929L9.62664 15.5241C7.42716 17.4921 3.84874 17.4918 1.6496 15.5241C-0.549868 13.5565 -0.549868 10.3544 1.6496 8.38681L3.02659 7.15478C3.39174 6.82806 4.0206 7.04521 4.03945 7.50693C4.0635 8.09536 4.18143 8.68653 4.39904 9.25743C4.47274 9.45074 4.42008 9.66456 4.25865 9.809L3.773 10.2435C2.73298 11.1741 2.70036 12.6893 3.73014 13.6289C4.7701 14.5778 6.47943 14.5835 7.52736 13.6458L10.0211 11.4149C11.0673 10.4789 11.0629 8.96597 10.0211 8.03386C9.88377 7.91121 9.74542 7.81592 9.63736 7.74935C9.56091 7.70237 9.49779 7.64007 9.45303 7.5674C9.40827 7.49473 9.38311 7.4137 9.37956 7.33079C9.36487 6.97993 9.50381 6.61838 9.81367 6.34114L10.595 5.64205C10.7999 5.45873 11.1213 5.43622 11.3588 5.58457C11.6309 5.75456 11.8857 5.94562 12.1204 6.15557ZM17.3504 1.47586C15.1513 -0.49182 11.5728 -0.492086 9.37337 1.47586L6.87962 3.70711C6.87516 3.71109 6.87034 3.71541 6.86626 3.71939C4.69291 5.67478 4.66244 8.85859 6.87962 10.8444C7.11425 11.0544 7.36907 11.2454 7.64114 11.4154C7.87871 11.5637 8.20015 11.5412 8.405 11.3579L9.1863 10.6588C9.49616 10.3816 9.6351 10.02 9.6204 9.66918C9.61685 9.58627 9.59169 9.50524 9.54693 9.43257C9.50217 9.3599 9.43905 9.29759 9.3626 9.25062C9.25454 9.18405 9.1162 9.08876 8.97886 8.9661C7.93708 8.03399 7.93271 6.52106 8.97886 5.58504L11.4726 3.35412C12.5205 2.4165 14.2298 2.42215 15.2698 3.37106C16.2996 4.3107 16.267 5.82589 15.227 6.75644L14.7413 7.19097C14.5799 7.3354 14.5272 7.54923 14.6009 7.74254C14.8185 8.31343 14.9365 8.90461 14.9605 9.49304C14.9794 9.95476 15.6082 10.1719 15.9734 9.84519L17.3504 8.61316C19.5499 6.64558 19.5499 3.44347 17.3504 1.47586Z"
              fill="white"
            />
          </svg>
        )}
      </Link>
    </div>
  );
}

export default SocialShare;
