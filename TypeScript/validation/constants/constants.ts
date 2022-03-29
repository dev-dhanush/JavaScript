export class Constants {
	public static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	public static numberRegex = /^[0-9]+$/;
	public static FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;

	public static FullNameRegEx = /^([a-zA-Z]{2,20})$/;
	public static BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
	public static PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
	public static EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
	public static ConNoRegEx = /^([0-9]{10})$/;
	public static AgeRegEx = /^([0-9]{1,2})$/;
	public static AadhaarNoRegEx = /^([0-9]{12})$/;
	public static GSTNoRegEx = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	public static IndianDrivingLicenseNoRegEx = /^([A-Z]{2,3}[-/0-9]{8,13})$/;
	public static IndianVehicleRegNoRegEx = /^([A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4})$/;
	public static PincodeRegEx = /^[1-9][0-9]{5,6}$/;
	public static PANNoRegEx = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
	public static IFSCCodeRegEx = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
	public static BankAccountNoRegEx = /^([0-9]{9,18})$/;
	public static PostTitleRegex = /^(.{30,300})$/;
	public static PostDescRegex = /^(.{100,3000})$/;
	public static LatitudeLongitude = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/;
}
