using Microsoft.EntityFrameworkCore.Migrations;

namespace lab2.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DailyPrice = table.Column<decimal>(nullable: false),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    PassengerCapacity = table.Column<string>(nullable: true),
                    Milage = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Stock = table.Column<string>(nullable: true),
                    HP = table.Column<string>(nullable: true),
                    Cyls = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
