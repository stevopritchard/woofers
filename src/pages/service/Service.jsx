import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Service.css';

class Service extends Component {
    constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
    render(){

    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
return (
            <div className="container">
                <div id="contService-sm">
                    <Row>
                        <Col className="col preScrollable" xs="12" sm="12" md="12" lg="12">
                            <h3>A full groom at Woofers as standard includes:</h3>
                            <ul>
                                <li>A deep shampoo tailored to your dogs coat (including sensitive medicated shampoo). <span role="img" aria-label="bathtub">&#x1F6C1;</span></li>
                                <li>A blueberry facial cleanse to remove any tear stains.</li>
                                <li>Ear protection is used when drying your dog to help them keep comfortable and calm.</li>
                                <li>Ears are cleaned and nails are clipped <span role="img" aria-label="nail polish">&#x1F485;</span></li>
                                <li>Their coat is deshedded so there is less hair around your home. </li>
                                <li>Cologne/perfume specifically for dogs is used to keep them smelling gorgeous for longer.</li>
                                <li>A bow added for that finishing touch.</li>
                                <li>Complimentary cuddles with all treatments. <span role="img" aria-label="paw prints">&#x1F43E;</span></li>
                            </ul>
                            <table id="scrollingTable" class="table table-fixed" cellspacing="3">
                                <thead>
                                    <tr>
                                        <th class="col-xs-6">Breed</th>
                                        <th class="col-xs-3">Grooming Price</th>
                                        <th class="col-xs-3">Hand Strip Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="col-xs-6">Affenpinscher</td>
                                        <td class="col-xs-3">from £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Afghan Hound</td>
                                        <td class="col-xs-3">£50 – £65</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Airedale Terrier</td>
                                        <td class="col-xs-3">£55 – £65</td>
                                        <td class="col-xs-3">£80</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Akita</td>
                                        <td class="col-xs-3">£45 – £70</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Alaskan Malamute</td>
                                        <td class="col-xs-3">£50 – £70</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Australian Cattle Dog</td>
                                        <td class="col-xs-3">£40 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">American Cocker</td>
                                        <td class="col-xs-3">£45 – £55</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Australian Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bansenji</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Basset Hound</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Beagle</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bearded Collie</td>
                                        <td class="col-xs-3">From £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bedlington Terrier</td>
                                        <td class="col-xs-3">£40 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Belgian Shepherds</td>
                                        <td class="col-xs-3">From £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bernese Mountain Dog</td>
                                        <td class="col-xs-3">From £70</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bichon Bolognese</td>
                                        <td class="col-xs-3">£40 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bichon Frise</td>
                                        <td class="col-xs-3">£40 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Blood Hound</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Border Collie</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Border Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£55</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Borzoi</td>
                                        <td class="col-xs-3">From £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bouvier Des Flandres</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Boxer</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Briard</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Brussels Griffon</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£55</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bull Dog</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Bull Terrier</td>
                                        <td class="col-xs-3">£25 – £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Cavalier King Charles Spaniel</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Cairn Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£55</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Cesky Terrier</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Chihuahua short coat</td>
                                        <td class="col-xs-3">£20 – £25</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Chihuahua long coat</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Chinese Crested</td>
                                        <td class="col-xs-3">£38 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Chinese Crested Hairless</td>
                                        <td class="col-xs-3">£35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Chow Chow</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Clumber Spaniel</td>
                                        <td class="col-xs-3">£40-45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Cockapoo</td>
                                        <td class="col-xs-3">From 45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Cocker Spaniel</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Collie rough</td>
                                        <td class="col-xs-3">From £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Collie short</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Corgi</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dachshund min + short</td>
                                        <td class="col-xs-3">£20 – £25</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dachshund min + long</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3">Wire £50</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dachshund standard + short</td>
                                        <td class="col-xs-3">£25 – £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dachshund standard + long</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">Wire £60</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dalmatian</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Deerhound</td>
                                        <td class="col-xs-3">£45 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Doberman</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Dogue De Bordeaux</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Elkhound</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">English Setter</td>
                                        <td class="col-xs-3">From £45</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Fox Terrier</td>
                                        <td class="col-xs-3">£30 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">French Bull Dog</td>
                                        <td class="col-xs-3">£25 – £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">German Shepherd short</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">German Shepherd long</td>
                                        <td class="col-xs-3">From £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">German Wire Haired Pointer</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">£55</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Golden Retriever</td>
                                        <td class="col-xs-3">From £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Gordon Setter</td>
                                        <td class="col-xs-3">£45 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Great Dane</td>
                                        <td class="col-xs-3">£45 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Greyhound</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Havanese</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Hungarian Vizsla</td>
                                        <td class="col-xs-3">£30 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Husky</td>
                                        <td class="col-xs-3">£45 – £65</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Irish Setter</td>
                                        <td class="col-xs-3">£40 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Irish Terrier</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">£70</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Irish Wolf Hound</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3">£60 – £70</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Italian Greyhound</td>
                                        <td class="col-xs-3">£25 - £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Italian Spinone</td>
                                        <td class="col-xs-3">£45 – £55</td>
                                        <td class="col-xs-3">£70</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Jack Russell</td>
                                        <td class="col-xs-3">£20 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Japanese chin</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Keeshond</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Kerry Blue</td>
                                        <td class="col-xs-3">£40 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Labradoodle</td>
                                        <td class="col-xs-3">From £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Labrador</td>
                                        <td class="col-xs-3">From £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Lakeland Terrier</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Leonberger</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Lhasa Apso</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Lurcher</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Maltese Terrier</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Mastiff</td>
                                        <td class="col-xs-3">£40- £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Newfoundland</td>
                                        <td class="col-xs-3">£80 - £100</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Norfolk Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Norwich Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Old English Sheepdog</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Papillon</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Patterdale Terrier</td>
                                        <td class="col-xs-3">£30 – £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Pekingese</td>
                                        <td class="col-xs-3">From £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Pointer</td>
                                        <td class="col-xs-3">£30 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Pomeranian</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Poodle Toy</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Poodle Miniature</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Poodle Standard</td>
                                        <td class="col-xs-3">From £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Portuguese Water Dog</td>
                                        <td class="col-xs-3">£50 – £65</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Pug</td>
                                        <td class="col-xs-3">£25 – £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Pyrenean Mountain Dog</td>
                                        <td class="col-xs-3">From £80</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Rhodesian Ridgeback</td>
                                        <td class="col-xs-3">From £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Rottweiler</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Samoyed</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Schnauzer Miniature</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3">£65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Schnauzer Standard</td>
                                        <td class="col-xs-3">£45 – £50</td>
                                        <td class="col-xs-3">£70</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Schnauzer Giant</td>
                                        <td class="col-xs-3">£50-£55</td>
                                        <td class="col-xs-3">£80</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Scottish Terrier</td>
                                        <td class="col-xs-3">£35-£40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Shar-Pei</td>
                                        <td class="col-xs-3">£30 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Sheltie</td>
                                        <td class="col-xs-3">£40 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Shetland Sheep Dog</td>
                                        <td class="col-xs-3">£45 – £55</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Shih Tsu</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Spanish Water Dog</td>
                                        <td class="col-xs-3">£40 – £50</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Springer Spaniel</td>
                                        <td class="col-xs-3">£40 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">St. Bernard</td>
                                        <td class="col-xs-3">From £60</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Staffordshire Bull Terrier</td>
                                        <td class="col-xs-3">£25 – £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Tibetan Spaniel</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Tibetan Terrier</td>
                                        <td class="col-xs-3">From £35</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Weimaraner</td>
                                        <td class="col-xs-3">From £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Welsh Terrier</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">£55 – £65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">West Highland Terrier</td>
                                        <td class="col-xs-3">£35 – £45</td>
                                        <td class="col-xs-3">£55</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Whippet</td>
                                        <td class="col-xs-3">From £30</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Wire Fox Terrier</td>
                                        <td class="col-xs-3">£35 – £40</td>
                                        <td class="col-xs-3">£55 – £65</td>
                                    </tr>
                                    <tr>
                                        <td class="col-xs-6">Yorkshire Terrier</td>
                                        <td class="col-xs-3">£30 – £40</td>
                                        <td class="col-xs-3"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }else{
           return (
             <div className="container">
               <div id="contService">
                 <Row>
                   <Col
                     className="col preScrollable"
                     xs="12"
                     sm="12"
                     md="12"
                     lg="12"
                   >
                     <h3>
                       A full groom at Woofers as standard includes:
                     </h3>
                     <ul>
                       <li>
                         A deep shampoo tailored to your dogs coat
                         (including sensitive medicated shampoo).{" "}
                         <span role="img" aria-label="bathtub">
                           &#x1F6C1;
                         </span>
                       </li>
                       <li>
                         A blueberry facial cleanse to remove any tear
                         stains.
                       </li>
                       <li>
                         Ear protection is used when drying your dog to
                         help them keep comfortable and calm.
                       </li>
                       <li>
                         Ears are cleaned and nails are clipped{" "}
                         <span role="img" aria-label="nail polish">
                           &#x1F485;
                         </span>
                       </li>
                       <li>
                         Their coat is deshedded so there is less hair
                         around your home.{" "}
                       </li>
                       <li>
                         Cologne/perfume specifically for dogs is used
                         to keep them smelling gorgeous for longer.
                       </li>
                       <li>A bow added for that finishing touch.</li>
                       <li>
                         Complimentary cuddles with all treatments.{" "}
                         <span role="img" aria-label="paw prints">
                           &#x1F43E;
                         </span>
                       </li>
                     </ul>
                     <table
                       id="scrollingTable"
                       class="table table-fixed"
                       cellspacing="3"
                     >
                       <thead>
                         <tr>
                           <th class="col-xs-6">Breed</th>
                           <th class="col-xs-3">Grooming Price</th>
                           <th class="col-xs-3">Hand Strip Price</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td class="col-xs-6">Affenpinscher</td>
                           <td class="col-xs-3">from £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Afghan Hound</td>
                           <td class="col-xs-3">£50 – £65</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Airedale Terrier</td>
                           <td class="col-xs-3">£55 – £65</td>
                           <td class="col-xs-3">£80</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Akita</td>
                           <td class="col-xs-3">£45 – £70</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Alaskan Malamute</td>
                           <td class="col-xs-3">£50 – £70</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Australian Cattle Dog
                           </td>
                           <td class="col-xs-3">£40 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">American Cocker</td>
                           <td class="col-xs-3">£45 – £55</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Australian Terrier</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bansenji</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Basset Hound</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Beagle</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bearded Collie</td>
                           <td class="col-xs-3">From £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bedlington Terrier</td>
                           <td class="col-xs-3">£40 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Belgian Shepherds</td>
                           <td class="col-xs-3">From £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Bernese Mountain Dog
                           </td>
                           <td class="col-xs-3">From £70</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bichon Bolognese</td>
                           <td class="col-xs-3">£40 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bichon Frise</td>
                           <td class="col-xs-3">£40 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Blood Hound</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Border Collie</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Border Terrier</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£55</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Borzoi</td>
                           <td class="col-xs-3">From £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Bouvier Des Flandres
                           </td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Boxer</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Briard</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Brussels Griffon</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£55</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bull Dog</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Bull Terrier</td>
                           <td class="col-xs-3">£25 – £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Cavalier King Charles Spaniel
                           </td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Cairn Terrier</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£55</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Cesky Terrier</td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Chihuahua short coat
                           </td>
                           <td class="col-xs-3">£20 – £25</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Chihuahua long coat
                           </td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Chinese Crested</td>
                           <td class="col-xs-3">£38 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Chinese Crested Hairless
                           </td>
                           <td class="col-xs-3">£35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Chow Chow</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Clumber Spaniel</td>
                           <td class="col-xs-3">£40-45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Cockapoo</td>
                           <td class="col-xs-3">From 45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Cocker Spaniel</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Collie rough</td>
                           <td class="col-xs-3">From £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Collie short</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Corgi</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Dachshund min + short
                           </td>
                           <td class="col-xs-3">£20 – £25</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Dachshund min + long
                           </td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3">Wire £50</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Dachshund standard + short
                           </td>
                           <td class="col-xs-3">£25 – £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Dachshund standard + long
                           </td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">Wire £60</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Dalmatian</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Deerhound</td>
                           <td class="col-xs-3">£45 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Doberman</td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Dogue De Bordeaux</td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Elkhound</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">English Setter</td>
                           <td class="col-xs-3">From £45</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Fox Terrier</td>
                           <td class="col-xs-3">£30 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">French Bull Dog</td>
                           <td class="col-xs-3">£25 – £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             German Shepherd short
                           </td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             German Shepherd long
                           </td>
                           <td class="col-xs-3">From £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             German Wire Haired Pointer
                           </td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">£55</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Golden Retriever</td>
                           <td class="col-xs-3">From £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Gordon Setter</td>
                           <td class="col-xs-3">£45 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Great Dane</td>
                           <td class="col-xs-3">£45 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Greyhound</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Havanese</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Hungarian Vizsla</td>
                           <td class="col-xs-3">£30 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Husky</td>
                           <td class="col-xs-3">£45 – £65</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Irish Setter</td>
                           <td class="col-xs-3">£40 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Irish Terrier</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">£70</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Irish Wolf Hound</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3">£60 – £70</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Italian Greyhound</td>
                           <td class="col-xs-3">£25 - £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Italian Spinone</td>
                           <td class="col-xs-3">£45 – £55</td>
                           <td class="col-xs-3">£70</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Jack Russell</td>
                           <td class="col-xs-3">£20 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Japanese chin</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Keeshond</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Kerry Blue</td>
                           <td class="col-xs-3">£40 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Labradoodle</td>
                           <td class="col-xs-3">From £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Labrador</td>
                           <td class="col-xs-3">From £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Lakeland Terrier</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Leonberger</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Lhasa Apso</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Lurcher</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Maltese Terrier</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Mastiff</td>
                           <td class="col-xs-3">£40- £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Newfoundland</td>
                           <td class="col-xs-3">£80 - £100</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Norfolk Terrier</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Norwich Terrier</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Old English Sheepdog
                           </td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Papillon</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Patterdale Terrier</td>
                           <td class="col-xs-3">£30 – £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Pekingese</td>
                           <td class="col-xs-3">From £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Pointer</td>
                           <td class="col-xs-3">£30 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Pomeranian</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Poodle Toy</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Poodle Miniature</td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Poodle Standard</td>
                           <td class="col-xs-3">From £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Portuguese Water Dog
                           </td>
                           <td class="col-xs-3">£50 – £65</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Pug</td>
                           <td class="col-xs-3">£25 – £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Pyrenean Mountain Dog
                           </td>
                           <td class="col-xs-3">From £80</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Rhodesian Ridgeback
                           </td>
                           <td class="col-xs-3">From £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Rottweiler</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Samoyed</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Schnauzer Miniature
                           </td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3">£65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Schnauzer Standard</td>
                           <td class="col-xs-3">£45 – £50</td>
                           <td class="col-xs-3">£70</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Schnauzer Giant</td>
                           <td class="col-xs-3">£50-£55</td>
                           <td class="col-xs-3">£80</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Scottish Terrier</td>
                           <td class="col-xs-3">£35-£40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Shar-Pei</td>
                           <td class="col-xs-3">£30 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Sheltie</td>
                           <td class="col-xs-3">£40 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Shetland Sheep Dog</td>
                           <td class="col-xs-3">£45 – £55</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Shih Tsu</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Spanish Water Dog</td>
                           <td class="col-xs-3">£40 – £50</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Springer Spaniel</td>
                           <td class="col-xs-3">£40 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">St. Bernard</td>
                           <td class="col-xs-3">From £60</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             Staffordshire Bull Terrier
                           </td>
                           <td class="col-xs-3">£25 – £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Tibetan Spaniel</td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Tibetan Terrier</td>
                           <td class="col-xs-3">From £35</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Weimaraner</td>
                           <td class="col-xs-3">From £40</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Welsh Terrier</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">£55 – £65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">
                             West Highland Terrier
                           </td>
                           <td class="col-xs-3">£35 – £45</td>
                           <td class="col-xs-3">£55</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Whippet</td>
                           <td class="col-xs-3">From £30</td>
                           <td class="col-xs-3" />
                         </tr>
                         <tr>
                           <td class="col-xs-6">Wire Fox Terrier</td>
                           <td class="col-xs-3">£35 – £40</td>
                           <td class="col-xs-3">£55 – £65</td>
                         </tr>
                         <tr>
                           <td class="col-xs-6">Yorkshire Terrier</td>
                           <td class="col-xs-3">£30 – £40</td>
                           <td class="col-xs-3" />
                         </tr>
                       </tbody>
                     </table>
                   </Col>
                 </Row>
               </div>
             </div>
           );
         }
    }
}

export default Service;
