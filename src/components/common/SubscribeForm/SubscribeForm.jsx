import {
	SubcsribeFormTitle,
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
					<SubcsribeFormTitle>
						Subscribe to our newsletter.
					</SubcsribeFormTitle>

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
