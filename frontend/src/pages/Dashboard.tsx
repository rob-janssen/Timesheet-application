import { Card } from "react-bootstrap";
import React from "react";

type Props = {};

const title = "Dashboard";

const Dashboard = (props: Props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            rhoncus nulla. Phasellus dignissim enim turpis, quis commodo velit
            fermentum a. Praesent vel aliquet urna, vel luctus ante. Sed nec leo
            porttitor, ultrices urna at, egestas augue. Proin condimentum
            posuere metus sed pretium. Nunc posuere luctus mi at placerat. Nulla
            interdum mi id eros tincidunt efficitur. Pellentesque a urna at quam
            porttitor sollicitudin. Vestibulum pulvinar, urna ac porta pretium,
            mi elit rhoncus nisi, ac aliquam enim turpis at justo. Aenean
            feugiat lectus eu rhoncus fringilla. In tincidunt cursus lacus vitae
            elementum. Sed facilisis fermentum nisi, sed consectetur lacus
            ultricies sagittis. In sed dolor sit amet sem dictum dictum.
            Maecenas lobortis id ex ac commodo. Sed rutrum tincidunt elit vitae
            feugiat. Duis venenatis tincidunt molestie. Curabitur faucibus enim
            ac tortor lacinia volutpat. Suspendisse sed urna malesuada,
            consectetur ante ac, tristique est. Maecenas sapien ligula, lobortis
            id semper vitae, tincidunt quis sapien. Aenean luctus risus
            pellentesque porttitor ultricies. Phasellus ut mollis velit, sit
            amet accumsan nibh. Quisque et est porta, lobortis risus ac,
            suscipit sem. Nunc sed eros ut elit cursus tincidunt.
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Dashboard;
