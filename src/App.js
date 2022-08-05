import React from "react";
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";
import {
  DynamicRangeSlider,
  SelectedFilters,
  ResultList,
  ReactiveList,
} from "@appbaseio/reactivesearch";

function App() {
  return (
    <ReactiveBase
      url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
      app="good-books-ds"
      credentials="04717bb076f7:be54685e-db84-4243-975b-5b32ee241d31"
      enableAppbase
    >
      {/* Our components will go over here */}
      Hello from ReactiveSearch 👋
      <DynamicRangeSlider
        componentId="DynamicRangeSensor"
        dataField="guests"
        title="Guests"
        defaultValue={(min, max) => ({
          start: min,
          end: Math.min(min + 5, max),
        })}
        rangeLabels={(min, max) => ({
          start: min + " guest",
          end: max + " guests",
        })}
        stepValue={1}
        showHistogram={true}
        showFilter={true}
        interval={2}
        react={{
          and: ["CategoryFilter", "SearchFilter"],
        }}
        URLParams={true}
        loader="Loading ..."
        includeNullValues
      />
    </ReactiveBase>
  );
}

export default App;
