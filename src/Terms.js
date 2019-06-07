import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Terms.css';

class Terms extends Component {
    render () {
        return(
            <div className="container">
                <div id="contTerms">
                    <Row>
                        <Col className="col preScrollable" xs="12" sm="12" md="12" lg="12">
                            <h2>WOOFERS APPOINTMENTS AND POLICIES</h2>
                            <br/>
                            <h3>Cancellation/ No Shows/ Late Appointments</h3>
                            <ul>
                                <li>
                                    As a small business, no-shows can have a detrimental effect on us.  Whilst we understand that sometimes appointments have to be cancelled in an emergency, we do ask that you give us at least 24 hours notice where possible, prior to appointment cancellation, as we have a waiting list of clients. We reserve the right to charge a fee of £15 for appointments missed or cancelled with less than 24 hours notice payable prior to any future booking.
                                </li>
                                <li>
                                    Arriving 30 minutes or more late for appointments will in most cases require re-scheduling and a missed appointment fee of £15 will apply.
                                </li>
                            </ul>
                            <h3>Appointment times</h3>
                            <p>
                                We kindly request that you arrive at the time of your appointment and pick your pet up in reasonable time as advised.
                                Once 30 minutes has elapsed after the arranged collection time a £10 charge per hour will be added to the final price unless previously arranged. This is to discourage pets being left with us for extended periods.
                            </p>

                            <h3>Dematting Policy</h3>
                            <p>  
                                Minor matt removal is part of the normal grooming service provided but it takes a great deal of care and practice to undertake. As part of the general grooming services provided at Woofers each dog will be assessed on an individual basis and if after careful consideration for your pets welfare a clip off is the best course of action and can be achieved in the salon environment we will discuss the procedure and cost. 
                                If we feel that we can de-matt some or all of your dogs coat then an additional sum of £10.00 per 15 minutes will be incurred, in addition to the service all provided. We will only attempt to de-matt your dog if they are NOT showing signs of stress or anxiety
                                To demonstrate good practice and as members of the Pet Industry Federation and British Dog Grooming Association we abide by sector specific charters including the Animal Welfare Act (2006).
                                WE WILL ALWAYS DO WHAT IS RIGHT FOR YOUR DOG AT WOOFERS AND IF A CLIP OFF IS THE KINDEST COURSE OF ACTION, THIS WILL BE ADVISED.
                            </p>
                            <h3>Anal Glands</h3>
                            <ul>
                                <li>Woofers does not offer any anal gland emptying as this procedure is recommended to be carried out by a veterinary surgeon. (This is confirmed in law by the veterinary surgeons act 1966)</li>
                            </ul>
                            <h3>Refusal of service and aggressive dogs</h3>
                            <ul>
                                <li>Woofers staff  have the right to work in a safe environment and therefore Woofers reserves the right to refuse any groom or treatment, at any time. If any member of it staff feels they are unable to carry out or continue a groom or treatment then same will stop immediately, and you as the owner will be responsible for payment of the work carried out up until this point.</li>
                                <li>If your dog is showing signs of aggression and or biting but the groomer feels they can continue, then an appropriate muzzle may be used during any groom or treatment.</li>
                                <li>If your dog has behaviour problems, please let Woofers know when the appointment is made. Please also ensure that the member of staff to whom you give the dog is informed as to whether your dog has ever bitten another human or dog or has shown any signs of aggression in the past.</li>
                                <li>Additional charges may apply for extra time required due to a dog’s temperament and or behaviour during a groom or treatment.</li>
                                <li>You, as the owner agree to be held solely liable for any harm, injury or damaged caused by your dog and any costs thereafter incurred.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Terms