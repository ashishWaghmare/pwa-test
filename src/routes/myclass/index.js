import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import SignIn from '../../components/SignIn';

export default class MyClass extends Component {
	render() {
		return (
			<div class={style.myclass}>
				
				<Card>
					<Card.Primary>
						<Card.Title>Student card</Card.Title>
						<Card.Subtitle>All Students</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						This list of cards should allow teacher to perform all activities
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Student card</Card.Title>
						<Card.Subtitle>All Students</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						This list of cards should allow teacher to perform all activities
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Student card</Card.Title>
						<Card.Subtitle>All Students</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						This list of cards should allow teacher to perform all activities
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Student card</Card.Title>
						<Card.Subtitle>All Students</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						This list of cards should allow teacher to perform all activities
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Student card</Card.Title>
						<Card.Subtitle>All Students</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						This list of cards should allow teacher to perform all activities
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
			</div>

			
		);
	}
}
