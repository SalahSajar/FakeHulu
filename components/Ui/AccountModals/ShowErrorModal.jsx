import {useRouter} from "next/router";

import classes from "@styles/ShowErrorModal.module.css";

const ShowErrorModal = () => {
	const router = useRouter();

	return (
		<div className={classes["errorModal__BLOCK"]}>
            <div className={classes["errorModalBlock__CONTENT_WRAPPER"]}>
            	<img
                className={classes["error__ICON"]}
                src="/assets/accountPage-assets/icons/error-cloud.png"
                alt="error"
              />
            	<p className={classes["error__MESSAGE"]}> Something went wrong, please try again later. </p>
            	<button type="button" className={classes["reload__BTN"]} onClick={() => router.reload()} > reload </button>
            </div>
      	</div>
	)
}

export default ShowErrorModal;