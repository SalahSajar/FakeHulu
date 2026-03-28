import Link from "next/link"

import classes from "@styles/ReturnToAccountPage.module.css";

const ReturnToAccountPage = ({accountID}) => {
	return(
		<Link className={classes["returnToAccount__LINK"]} href={`/account/${accountID}`}>
			<span className={classes["returnToAccountLink__ICON_WRAPPER"]}>
				<img src="/assets/accountPage-assets/icons/return-arrow.png" alt="return" />
			</span>
		</Link>
	)
}

export default ReturnToAccountPage;