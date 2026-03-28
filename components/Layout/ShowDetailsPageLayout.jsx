import { useState } from "react";
import AccountLayout from "@Layout-Comps/AccountLayout"

import ShowsSlider from "@Ui-Comps/ShowsSlider";

import ReturnToAccountPage from "@Micro-Comps/ReturnToAccountPage";

import ShowDetailsUi from "@Ui-Comps/ShowDetailsUi"

import LoadingModal from "@Modals/LoadingModal";
import ShowErrorModal from "@Modals/ShowErrorModal";
import TrailerModal from "@Modals/TrailerModal";

import classes from "@styles/showDetailsPage.module.css";

const ShowDetailsPageLayout = ({
	type, 
	showDetails,
	showTrailerDetails,
	isLoading,
	error, 
	similarShowsList,
	accountID
}) => {
	const [displayTrailerModal, setDisplayTrailerModal] = useState(false);

	const displayTrailerModalHandler = (state) => {
		setDisplayTrailerModal(state);
	};
	return (
		<AccountLayout showNavbar={false}>
	        <main className={classes["showDetailsBlock__PAGE_BASE"]}>
				{/* Trailer Modal */}
		          {showTrailerDetails && (
		            <TrailerModal
		              displayTrailerModalHandler={displayTrailerModalHandler}
		              displayTrailerModal={displayTrailerModal}
		              showTrailerDetails={showTrailerDetails}
		            />
		          )}
		        {/* //////////////////////////////////////////// */}

		        {/* Return To Home Page */}
		          <ReturnToAccountPage accountID={accountID} />
		        {/* //////////////////////////////////////////// */}

				<section className={classes["movieDetails__SECTION"]}>
		            {isLoading ? <LoadingModal /> : error ? <ShowErrorModal /> : (
		            	!!showDetails && <ShowDetailsUi 
		            		type={type} 
		            		showDetails={showDetails} 
		            		displayTrailerModalHandler={displayTrailerModalHandler} 
		            	/>
		            )}
	          	</section>
				{!isLoading && !error && !!similarShowsList.length && (
					<ShowsSlider type={type} showsArr={similarShowsList}> Similar {type}</ShowsSlider>
				)}
	        </main>
	    </AccountLayout>
	)
}

export default ShowDetailsPageLayout