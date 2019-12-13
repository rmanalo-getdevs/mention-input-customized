import React from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  FlatList,
  Animated,
  View,
  Text
} from "react-native";

import MentionListItem from "../MentionListItem";
// Styles
import styles from "./MentionListStyles";

export class MentionList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
    editorStyles: PropTypes.object,
    isTrackingStarted: PropTypes.bool,
    suggestions: PropTypes.array,
    keyword: PropTypes.string,
    onSuggestionTap: PropTypes.func
  };

  constructor() {
    super();
    this.previousChar = " ";
  }

  renderSuggestionsRow = ({ item }) => {
    return (
      <MentionListItem
        onSuggestionTap={this.props.onSuggestionTap}
        item={item}
        editorStyles={this.props.editorStyles}
        keyword={this.props.keyword}
      />
    );
  };
  render() {
    const { props } = this;

    const { keyword, isTrackingStarted } = props;
    const withoutAtKeyword = keyword.substr(1, keyword.length);
    const list = this.props.list;
    const suggestions =
      withoutAtKeyword !== ""
        ? list.filter(user => user.username.includes(withoutAtKeyword))
        : list;
    if (!isTrackingStarted) {
      return null;
    }
    return (
      <Animated.View
        style={[
          { ...styles.suggestionsPanelStyle },
          this.props.editorStyles.mentionsListWrapper
        ]}
      >
        <FlatList
          style={styles.mentionsListContainer}
          keyboardShouldPersistTaps={"always"}
          horizontal={false}
          ListEmptyComponent={
            <Text
              style={{
                fontSize: 13,
                color: "#DCE0E0",
                textAlign: "center",
                padding: 4
              }}
            >
              No Results Found
            </Text>
          }
          enableEmptySections={true}
          data={suggestions}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={rowData => {
            return this.renderSuggestionsRow(rowData);
          }}
        />
      </Animated.View>
    );
  }
}

export default MentionList;
