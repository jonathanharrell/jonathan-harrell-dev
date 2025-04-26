"use client";

import React, { ChangeEvent, JSX } from "react";

interface SearchSelectProps {
  filterMethod: (options: string[], value: string) => string[];
  render: (args: {
    results: string[];
    searchList: (event: ChangeEvent<HTMLInputElement>) => void;
  }) => JSX.Element;
  options: string[];
}

interface SearchSelectState {
  results: string[];
}

class SearchSelect extends React.Component<
  SearchSelectProps,
  SearchSelectState
> {
  constructor(props: SearchSelectProps) {
    super(props);
    this.state = {
      results: props.options,
    };
  }

  searchList(event: ChangeEvent<HTMLInputElement>) {
    const results = this.props.filterMethod(
      this.props.options,
      event.target?.value,
    );
    this.setState({ results });
  }

  render() {
    return this.props.render({
      results: this.state.results,
      searchList: (event) => this.searchList(event),
    });
  }
}

const options = [
  "Inside Out",
  "John Wick",
  "Jurassic World",
  "The Lord of the Rings",
  "Pacific Rim",
  "Pirates of the Caribbean",
  "Planet of the Apes",
  "Saw",
  "Sicario",
  "Zombies",
];

interface AutocompleteProps {}

interface AutocompleteState {
  dropdownVisible: boolean;
}

export class Autocomplete extends React.Component<
  AutocompleteProps,
  AutocompleteState
> {
  constructor(props: AutocompleteProps) {
    super(props);
    this.state = {
      dropdownVisible: false,
    };
  }

  filterMethod(options: string[], query: string) {
    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase()),
    );
  }

  showDropdown() {
    this.setState({ dropdownVisible: true });
  }

  hideDropdown() {
    this.setState({ dropdownVisible: false });
  }

  render() {
    return (
      <figure>
        <div>
          <div className="not-article-prose p-12 sm:px-16 bg-neutral-950 font-sans text-base">
            <SearchSelect
              options={options}
              filterMethod={this.filterMethod}
              render={({ results, searchList }) => (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type to search list"
                    onChange={searchList}
                    onFocus={() => this.showDropdown()}
                    onBlur={() => this.hideDropdown()}
                    className="form-input block w-full border-neutral-700 bg-neutral-900 shadow-sm focus:border-neutral-600 focus:ring focus:ring-neutral-700 focus:ring-opacity-50 placeholder:text-neutral-400"
                  />
                  {this.state.dropdownVisible && results.length > 0 && (
                    <div className="absolute w-full bg-neutral-800">
                      <ul className="py-1.5">
                        {results.map((result) => (
                          <li
                            className="py-1.5 px-3 hover:bg-neutral-700 cursor-pointer"
                            key={result}
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <figcaption className="!col-start-1 !col-end-9 mt-4">
          Using render props in React or scoped slots in Vue, we reuse the same
          basic search/select functionality to create two different components.
        </figcaption>
      </figure>
    );
  }
}

interface TagListSearchProps {}

interface TagListSearchState {}

export class TagListSearch extends React.Component<TagListSearchProps> {
  constructor(props: TagListSearchProps) {
    super(props);
  }

  filterMethod(options: string[], query: string) {
    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase()),
    );
  }

  render() {
    return (
      <figure>
        <div>
          <div className="not-article-prose p-12 sm:px-16 bg-neutral-950 font-sans text-base">
            <SearchSelect
              options={options}
              filterMethod={this.filterMethod}
              render={({ results, searchList }) => (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Type to search list"
                    onChange={searchList}
                    className="form-input block w-full border-neutral-700 bg-neutral-900 shadow-sm focus:border-neutral-600 focus:ring focus:ring-neutral-700 focus:ring-opacity-50 placeholder:text-neutral-400"
                  />
                  <ul className="flex flex-wrap gap-1.5">
                    {results.map((result) => (
                      <li
                        className="py-0.5 px-2 bg-neutral-800 rounded text-base"
                        key={result}
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            />
          </div>
        </div>
        <figcaption>
          An additional component we can create that reuses the same core
          search/select functionality is a tag-like list.
        </figcaption>
      </figure>
    );
  }
}
