using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagement.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddAssignmentUserFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Assignments_Users_AssignedUserId1",
                table: "Assignments");

            migrationBuilder.DropIndex(
                name: "IX_Assignments_AssignedUserId1",
                table: "Assignments");

            migrationBuilder.DropColumn(
                name: "AssignedUserId1",
                table: "Assignments");

            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "Users",
                type: "uuid using \"Id\"::uuid",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_AssignedUserId",
                table: "Assignments",
                column: "AssignedUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Assignments_Users_AssignedUserId",
                table: "Assignments",
                column: "AssignedUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Assignments_Users_AssignedUserId",
                table: "Assignments");

            migrationBuilder.DropIndex(
                name: "IX_Assignments_AssignedUserId",
                table: "Assignments");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Users",
                type: "text",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid using \"Id\"::uuid");

            migrationBuilder.AddColumn<string>(
                name: "AssignedUserId1",
                table: "Assignments",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_AssignedUserId1",
                table: "Assignments",
                column: "AssignedUserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Assignments_Users_AssignedUserId1",
                table: "Assignments",
                column: "AssignedUserId1",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
