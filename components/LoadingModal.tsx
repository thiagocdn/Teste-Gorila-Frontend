import Lottie from "react-lottie";

import loadingIcon from '../assets/graph-loading.json';

export default function LoadingModal() {
  
  return (
    <div className="fixed flex justify-center items-center px-2 py-4 left-0 top-0 w-screen h-screen bg-white bg-opacity-80 z-50">
      <div className="w-4/5 h-4/5">
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid cover'
            },
            animationData: loadingIcon
          }}
          speed={2}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </div>
  )
}