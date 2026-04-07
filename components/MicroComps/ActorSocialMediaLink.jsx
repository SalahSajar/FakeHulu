import Link from "next/link";

const ActorSocialMediaLink = ({type, id}) => {
	return (
		<li>
			<Link target="_blank" href={`https://${type}.com/${id}`} tLinkrget="_blank" rel="noopener noreferrer" >
				<img src={`/assets/accountPage-assets/icons/${type}.png`} alt={` ${type}`} />
			</Link>
		</li>
	)
}

export default ActorSocialMediaLink;