package entities;

public class Student {
    public String name;

    public double firstQuarter;
    public double secondQuarter;
    public double thirdQuarter;

    double PASS_VALUE = 100 * 0.6;

    private double getFinalGrade() {
        return firstQuarter + secondQuarter + thirdQuarter;
    }

    private boolean isPass() {
        return this.getFinalGrade() >= PASS_VALUE;
    }

    public void getMessage() {
        String finalGradeFormated = String.format("%.2f",this.getFinalGrade());
        if(this.isPass()) {
            System.out.println("FINAL GRADE = "+finalGradeFormated);
            System.out.println("PASS");
            return;
        }

        System.out.println("FINAL GRADE = "+finalGradeFormated);
        System.out.println("FAILED");
        System.out.println("MISSING " + (String.format("%.2f",PASS_VALUE - this.getFinalGrade())) + " POINTS");
    }
}
