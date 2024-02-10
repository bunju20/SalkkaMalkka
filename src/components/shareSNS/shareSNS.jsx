
import { useEffect } from 'react'

const shareSNS = url => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const script = document.createElement('script')
		script.src = url
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [url])
}
export default shareSNS
