
const nextConfig = {
  images: {
  	remotePatterns: [
  		{
  			protocol: "https",
  			hostname: "image.tmdb.org",
  			port: "",
  			pathname: "/t/p/w300/**",
	        search: '',
  		},
  	]
  }
}
 
module.exports = nextConfig