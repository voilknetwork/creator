import React, { Component, Fragment } from 'react';
import {text} from "../constants/text"
class Packs extends Component {

	render() {
		return (
			<Fragment>
				<section class="section overfree">
					<div class="container">
						<div class="row callout bgcolor">
							<div class="col-md-9">
		<p class="lead">{text.tag_line}</p>
							</div>
							<div class="col-md-3">
								<div class="button-wrap text-center">
									<a href="/register" class="btn btn-transparent btn-light btn-lg">Join Now!</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

export default Packs;