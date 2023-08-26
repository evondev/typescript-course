{
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
  const applicant = {
    myInfo: "John",
    myOtherInfo: { id: 123, age: 22 },
  } satisfies Person;
  // Error, why ?
  applicant.myInfo.toUpperCase();
}
