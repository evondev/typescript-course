type personInfo = personName | otherDetails;
type personName = "John" | "Jack" | "Justin";
type otherDetails = {
  id: number;
  age: number;
};
type Person = {
  myInfo: personInfo;
  myOtherInfo: personInfo;
};
const applicant: Person = {
  myInfo: "John",
  myOtherInfo: { id: 123, age: 22 },
};
// Error, why ?
applicant.myInfo.toUpperCase();
