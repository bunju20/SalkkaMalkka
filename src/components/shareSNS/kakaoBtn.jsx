
import useScript from '../../hooks/use-script'
import KakaoShareButton from './kakaoShareButton'

const KakaoBtn = () => {
	useScript('https://developers.kakao.com/sdk/js/kakao.js')
	return (
		<div className="layout">
			<KakaoShareButton />
		</div>
	)
}
export default KakaoBtn
