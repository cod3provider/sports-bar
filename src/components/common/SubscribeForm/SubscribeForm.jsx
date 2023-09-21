import {
	FooterFormTitle,
	FormWrap,
	StyledSubscribeForm,
	SubscribeButton,
	SubscribeInput,
} from './SubscribeForm.styled.js';

const SubscribeForm = () => {
	return (
		<div>
			<StyledSubscribeForm>
				<FormWrap>
					<FooterFormTitle>
						Subscribe to our newsletter.
					</FooterFormTitle>

					<SubscribeInput placeholder="Enter your mail" type="text"/>
				</FormWrap>

				<SubscribeButton>
					Subscribe
				</SubscribeButton>
			</StyledSubscribeForm>
		</div>
	)
}

export default SubscribeForm;
