import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  setShow: (value: boolean) => void;
}

function CheckoutModal({ children, setShow }: Props) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return createPortal(
    <div
      ref={overlay}
      className="fixed inset-0 bg-black/60 z-30 flex items-center justify-center overflow-y-auto"
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 w-[90%] 2xl:w-[60%] p-6 rounded-xl bg-white transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between mb-6">
          <h3 className="text-2xl font-semibold">Shipping Details</h3>
          <button onClick={onDismiss}>
            <IoMdClose size={30} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default CheckoutModal;
