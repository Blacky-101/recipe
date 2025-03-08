import React, { Component } from "react";
import {BsFillLightningChargeFill,BsBalloonHeartFill,BsCalendar2DayFill} from "react-icons/bs";
import {IoFastFoodSharp,IoStar,IoPencilSharp,IoDocumentText} from "react-icons/io5";
import { LuChefHat, LuClock } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import "./index.css";

class RecipeDetails extends Component {
  constructor(props){
    super(props);
    this.state ={
      filterMealType:"",
      filterDishType:"",
      filterContestWinner:"",
      filterFeatured:"",
      filterTestKitchenApproved: "",
      searchQuery:"",
      sidebarVisible: false,
    };
  }

  filterRecipes() {
    const {menuLists}=this.props;
    const {
      filterMealType,
      filterDishType,
      filterContestWinner,
      filterFeatured,
      filterTestKitchenApproved,
      searchQuery,
    } = this.state;

    const filteredBySearch = menuLists.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredBySearch.filter((recipe) => {
      const mealTypeMatch =filterMealType ? recipe.mealType === filterMealType : true;
      const dishTypeMatch =filterDishType ? recipe.dishType === filterDishType : true;
      const contestWinnerMatch = filterContestWinner
        ? recipe.contestWinner === (filterContestWinner === "Won")
        : true;
      const featuredMatch = filterFeatured
        ? recipe.featured === (filterFeatured === "Featured")
        : true;
      const testKitchenApprovedMatch = filterTestKitchenApproved
        ? recipe.testKitchenApproved === (filterTestKitchenApproved === "Yes")
        : true;

      return (
        mealTypeMatch &&
        dishTypeMatch &&
        contestWinnerMatch &&
        featuredMatch &&
        testKitchenApprovedMatch
      );
    });
  }

  
  handleFilterChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  
  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  
  toggleSidebar() {
    this.setState((prevState) => ({ sidebarVisible: !prevState.sidebarVisible }));
  }

  render() {
    const filteredRecipes = this.filterRecipes();

    return (
      <div className="recipe-details-container">
        {/* Sidebar for Filters */}
        <div className={`sidebar ${this.state.sidebarVisible ? "visible" : ""}`}>
          <div className="sidebar-header">
            <h3>Filter Recipes</h3>
            <button onClick={this.toggleSidebar.bind(this)} className="close-btn">X</button>
          </div>
          <div className="filter-group">
            <label>Meal Type:</label>
            <select
              name="filterMealType"
              value={this.state.filterMealType}
              onChange={this.handleFilterChange.bind(this)}
            >
              <option value="">All</option>
              <option value="Dinner">Dinner</option>
              <option value="Lunch">Lunch</option>
              <option value="Dessert">Dessert</option>
              <option value="Breakfast">Breakfast</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Dish Type:</label>
            <select
              name="filterDishType"
              value={this.state.filterDishType}
              onChange={this.handleFilterChange.bind(this)}
            >
              <option value="">All</option>
              <option value="Curry">Curry</option>
              <option value="Pizza">Pizza</option>
              <option value="Seafood">Seafood</option>
              <option value="Soup">Soup</option>
              <option value="Mexican">Mexican</option>
              <option value="Smoothie">Smoothie</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Contest Winner:</label>
            <select
              name="filterContestWinner"
              value={this.state.filterContestWinner}
              onChange={this.handleFilterChange.bind(this)}
            >
              <option value="">All</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Featured:</label>
            <select
              name="filterFeatured"
              value={this.state.filterFeatured}
              onChange={this.handleFilterChange.bind(this)}
            >
              <option value="">All</option>
              <option value="Featured">Featured</option>
              <option value="Not Featured">Not Featured</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Test Kitchen Approved:</label>
            <select
              name="filterTestKitchenApproved"
              value={this.state.filterTestKitchenApproved}
              onChange={this.handleFilterChange.bind(this)}
            >
              <option value="">All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Sidebar*/}
        <div className="sidebar-toggle">
          <button onClick={this.toggleSidebar.bind(this)}>
            <FaBars className="fa-icons"/>
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search recipes..."
            value={this.state.searchQuery}
            onChange={this.handleSearchChange.bind(this)}
          />
        </div>

        {/* Recipe Display */}
        {filteredRecipes.length === 0 ? (
          <h2>No recipes found</h2>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="card-container">
              {/* Image & Title */}
              <div className="image-container">
                <img src={recipe.imgUrl} alt={recipe.name} />
                <h1>{recipe.name}</h1>

                <div className="info">
                  <BsFillLightningChargeFill className="icons" />
                  <h4>{recipe.totalRatings}</h4>
                </div>

                <div className="info">
                  <IoStar className="icons" />
                  <h4>{recipe.avgRating}</h4>
                </div>
              </div>

              {/* Description  */}
              <div className="description-container">
                <div className="info">
                  <LuChefHat className="icons" />
                  <h3>{recipe.chef}</h3>
                </div>

                <div className="info">
                  <BsCalendar2DayFill className="icons" />
                  <h4>{recipe.uploadedOn}</h4>
                </div>

                <div className="info">
                  <LuClock className="icons" />
                  <h4>{recipe.mealType}</h4>
                </div>

                <div className="info">
                  <IoFastFoodSharp className="icons" />
                  <h4>{recipe.dishType}</h4>
                </div>

                <div className="info">
                  <h4>Test Kitchen Approved: {recipe.testKitchenApproved ? "Yes" : "No"}</h4>
                </div>

                <div className="info">
                  <BsBalloonHeartFill className="icons" />
                  <p>{recipe.contestWinner ? "Won" : "Lost"}</p>
                </div>

                <div className="info">
                  <IoPencilSharp className="icons" />
                  <h4>{recipe.featured ? "Featured" : "Not Featured"}</h4>
                </div>

                <div className="info">
                  <IoDocumentText className="icons" />
                  <h4>{recipe.description}</h4>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default RecipeDetails;
