
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace lab2.Models{
    
    // represent the connection with the DB
    // will ber used to access diffrent tables (classes)
    // to retrive and store information/ records
    public class DataContext : DbContext{

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // specify which model requires to tbe a table in the DB

        public DbSet<Car> Cars {get; set;}

        // public DBSet<Employee> Employees {get; set;}

    }
}