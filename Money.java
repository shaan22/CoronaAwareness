public class Money {
 protected String country, name;
 public String getCountry() { return country; }
}
 class Yen extends Money {
 public String getCountry() { return super.country; }
 }

 class Euro extends Money {
 public String getCountry(String timeZone) {
 return super.getCountry();
 }
}