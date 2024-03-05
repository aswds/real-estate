import Container from "src/styled/Flex";
import Title from "./Navbar/shared/Title";

function TransferInfo() {
  const data = [
    { title: "12+", description: "Customers" },
    { title: "14+", description: "Offices" },
    { title: "10+", description: "Students" },
  ];

  return (
    <Container className="w-full px-5" justifyContent="space-between">
      {data.map((data, index) => {
        return <Title {...data} flexColumnReverse key={index} />;
      })}
    </Container>
  );
}

export default TransferInfo;
