"use client";

import React from "react";

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  return <div className="flex flex-col gap-3">{props.children}</div>;
};

interface AccordionItemContext {
  expanded: boolean;
  toggleExpansion: () => void;
}

const AccordionItemContext = React.createContext<AccordionItemContext>({
  expanded: false,
  toggleExpansion: () => {},
});

interface AccordionItemProps {
  children: React.ReactNode;
}

interface AccordionItemState {
  expanded: boolean;
  toggleExpansion: () => void;
}

class AccordionItem extends React.Component<
  AccordionItemProps,
  AccordionItemState
> {
  constructor(props: AccordionItemProps) {
    super(props);

    this.state = {
      expanded: false,
      toggleExpansion: () => {
        this.setState({ expanded: !this.state.expanded });
      },
    };
  }

  render() {
    return (
      <AccordionItemContext.Provider value={this.state}>
        <div className="rounded-lg bg-neutral-800">{this.props.children}</div>
      </AccordionItemContext.Provider>
    );
  }
}

interface AccordionHeaderProps {
  children: React.ReactNode;
}

const AccordionHeader = (props: AccordionHeaderProps) => {
  return (
    <AccordionItemContext.Consumer>
      {({ expanded, toggleExpansion }) => (
        <h2>
          <button
            onClick={toggleExpansion}
            className="w-full py-3 px-4 text-left"
          >
            {expanded ? "▼ " : "► "}
            {props.children}
          </button>
        </h2>
      )}
    </AccordionItemContext.Consumer>
  );
};

interface AccordionPanelProps {
  children: React.ReactNode;
}

const AccordionPanel = (props: AccordionPanelProps) => {
  return (
    <AccordionItemContext.Consumer>
      {({ expanded }) => (
        <div
          className={
            "p-4 border-t border-neutral-700 " + (expanded ? "block" : "hidden")
          }
        >
          {props.children}
        </div>
      )}
    </AccordionItemContext.Consumer>
  );
};

export class AccordionExample extends React.Component {
  render() {
    return (
      <figure>
        <div>
          <div className="not-article-prose p-12 sm:px-16 bg-neutral-950 font-sans text-base">
            <Accordion>
              <AccordionItem>
                <AccordionHeader>Section 1</AccordionHeader>
                <AccordionPanel>
                  Mauris mauris ante, blandit et, ultrices a, suscipit eget,
                  quam. Integer ut neque. Vivamus nisi metus, molestie vel,
                  gravida in, condimentum sit amet, nunc. Nam a nibh. Donec
                  suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur
                  malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>Section 2</AccordionHeader>
                <AccordionPanel>
                  Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum
                  sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet,
                  mauris turpis porttitor velit, faucibus interdum tellus libero
                  ac justo. Vivamus non quam. In suscipit faucibus urna.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>Section 3</AccordionHeader>
                <AccordionPanel>
                  Nam enim risus, molestie et, porta ac, aliquam ac, risus.
                  Quisque lobortis. Phasellus pellentesque purus in massa.
                  Aenean in pede. Phasellus ac libero ac tellus pellentesque
                  semper. Sed ac felis. Sed commodo, magna quis lacinia ornare,
                  quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </figure>
    );
  }
}
